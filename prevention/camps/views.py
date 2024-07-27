from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from . import models, serializers


class camp(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes  = [IsAuthenticated]

    def get(self, request):
        try:
            camps = models.Camps.objects.select_related("created_by").all()
            serializer = serializers.CampSerializer(camps, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": f'An error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 
    def post(self, request):
        try:
            serializer = serializers.CampSerializer(data=request.data, context={"request": request})
            if serializer.is_valid():
                try:
                    serializer.save()
                    return Response({"Success": "Camp created"}, status=status.HTTP_201_CREATED)
                except Exception as e:
                    return Response({"Error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"Error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)