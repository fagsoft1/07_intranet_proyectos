# Generated by Django 2.0.4 on 2018-09-18 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0028_auto_20180828_1601'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cotizacion',
            options={'permissions': [['list_cotizacion', 'Puede listar cotizaciones'], ['detail_cotizacion', 'Puede ver detalle cotizacion'], ['gestionar_cotizacion', 'Puede gestionar cotizacion'], ['list_all_cotizacion', 'Puede listar todas las cotizaciones'], ['list_all_cotizaciones_activas', 'Puede listar todas las cotizaciones activas'], ['list_tuberia_ventas', 'Puede ver la tuberia de bentas'], ['list_tuberia_informe_uno', 'Puede Ver informe de tuberia de ventas']]},
        ),
    ]
