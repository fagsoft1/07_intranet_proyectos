# Generated by Django 2.0.4 on 2019-04-16 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listas_precios', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='formapagocanal',
            options={'permissions': [['list_formapagocanal', 'Puede listar formas de pago']]},
        ),
    ]