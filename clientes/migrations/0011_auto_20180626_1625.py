# Generated by Django 2.0.4 on 2018-06-26 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0010_auto_20180626_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactocliente',
            name='cargo',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='contactocliente',
            name='correo_electronico',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='contactocliente',
            name='correo_electronico_2',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='contactocliente',
            name='telefono',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='contactocliente',
            name='telefono_2',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
