# Generated by Django 2.0.4 on 2018-08-28 21:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0027_cotizacion_fecha_limite_segumiento_estado'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cotizacion',
            options={'permissions': [['list_cotizacion', 'Puede listar cotizaciones'], ['detail_cotizacion', 'Puede ver detalle cotizacion'], ['gestionar_cotizacion', 'Puede gestionar cotizacion'], ['list_all_cotizacion', 'Puede listar todas las cotizaciones'], ['list_all_cotizaciones_activas', 'Puede listar todas las cotizaciones activas']]},
        ),
        migrations.RemoveField(
            model_name='cotizacion',
            name='dias_espera_cambio_estado',
        ),
    ]
