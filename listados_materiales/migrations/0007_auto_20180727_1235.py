# Generated by Django 2.0.4 on 2018-07-27 17:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listados_materiales', '0006_cantidaditemliteraldiseno'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cantidaditemliteraldiseno',
            old_name='item_literal_dieno',
            new_name='item_literal_diseno',
        ),
    ]