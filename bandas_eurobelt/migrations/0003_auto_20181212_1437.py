# Generated by Django 2.1.4 on 2018-12-12 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bandas_eurobelt', '0002_auto_20181212_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='componente',
            name='descripcion_adicional',
            field=models.CharField(max_length=100, null=True),
        ),
    ]