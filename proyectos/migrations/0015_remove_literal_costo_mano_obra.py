# Generated by Django 2.0.1 on 2018-02-07 03:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0014_literal_costo_mano_obra'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='literal',
            name='costo_mano_obra',
        ),
    ]