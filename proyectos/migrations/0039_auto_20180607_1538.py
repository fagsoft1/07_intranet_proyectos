# Generated by Django 2.0.4 on 2018-06-07 20:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0038_remove_literal_cotizacion_nro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='cotizacion',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='mi_proyecto', to='cotizaciones.Cotizacion'),
        ),
    ]
