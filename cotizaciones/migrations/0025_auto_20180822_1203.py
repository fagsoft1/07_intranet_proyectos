# Generated by Django 2.0.4 on 2018-08-22 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0024_auto_20180822_1158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cotizacion',
            name='dias_espera_cambio_estado',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
