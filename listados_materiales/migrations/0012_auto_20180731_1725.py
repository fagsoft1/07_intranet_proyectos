# Generated by Django 2.0.4 on 2018-07-31 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listados_materiales', '0011_remove_itemliteraldiseno_cantidad_reservada_inventario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='itemliteraldiseno',
            name='cantidad_a_comprar',
        ),
        migrations.AddField(
            model_name='cantidaditemliteraldiseno',
            name='cantidad_a_comprar',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=12),
        ),
    ]
