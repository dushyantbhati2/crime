# Generated by Django 5.0.3 on 2024-03-28 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_profile_gender_alter_profile_occupation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='profile',
            name='occupation',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
