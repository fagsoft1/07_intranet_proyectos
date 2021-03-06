# Generated by Django 2.0.4 on 2018-05-11 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0010_auto_20180511_0219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cotizacion',
            name='costo_presupuestado',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
        migrations.AlterField(
            model_name='cotizacion',
            name='valor_ofertado',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
        migrations.AlterField(
            model_name='cotizacion',
            name='valor_orden_compra',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
    ]
