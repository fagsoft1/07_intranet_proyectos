# Generated by Django 2.0.4 on 2018-06-14 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0005_auto_20180614_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientebiable',
            name='nit',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
