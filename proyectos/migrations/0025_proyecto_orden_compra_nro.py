# Generated by Django 2.0.4 on 2018-04-25 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0024_proyecto_en_cguno'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='orden_compra_nro',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
