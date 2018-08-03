# Generated by Django 2.0.4 on 2018-07-27 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listados_materiales', '0002_auto_20180726_2234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemliteraldiseno',
            name='cantidad',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='itemliteraldiseno',
            name='cantidad_a_comprar',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='itemliteraldiseno',
            name='cantidad_reservada_inventario',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
