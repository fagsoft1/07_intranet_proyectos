# Generated by Django 2.0.4 on 2018-04-25 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0022_auto_20180424_2154'),
    ]

    operations = [
        migrations.AddField(
            model_name='literal',
            name='en_cguno',
            field=models.BooleanField(default=True),
        ),
    ]
