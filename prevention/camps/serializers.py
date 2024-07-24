from rest_framework.serializers import ModelSerializer
from user.serializers import userSerializers

from . import models


class CampFileSerializer(ModelSerializer):
    class Meta:
        model=models.Camp_files
        fields=('camp_files',)
        

class CampSerializer(ModelSerializer):
    created_by=userSerializers(read_only=True)
    files=CampFileSerializer(read_only=True,many=True)

    class Meta:
        model=models.Camps
        fields="__all__"
        extra_field=["files"]
    
    def create(self, validated_data):
        files=self.context["request"].FILES.getlist('files')
        c_user=self.context["request"].user
        camp=models.Camps.objects.create(created_by=c_user,**validated_data)
        for file in files:
            models.Camp_files.objects.create(camp=camp,camp_files=file)
        return camp
        