# Generated by Django 2.1.4 on 2018-12-27 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0044_auto_20181011_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='literal',
            name='abierto',
            field=models.BooleanField(db_index=True, default=True),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='abierto',
            field=models.BooleanField(db_index=True, default=True),
        ),
    ]
