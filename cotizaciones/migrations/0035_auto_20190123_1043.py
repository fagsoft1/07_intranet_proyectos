# Generated by Django 2.0.4 on 2019-01-23 15:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0034_auto_20190122_1503'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='archivocotizacion',
            options={'permissions': [('list_archivocotizacion', 'Can see list archivos cotizaciones')]},
        ),
    ]
