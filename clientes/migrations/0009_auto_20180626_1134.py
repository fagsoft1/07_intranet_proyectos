# Generated by Django 2.0.4 on 2018-06-26 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0008_auto_20180619_1909'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactocliente',
            name='ciudad',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='contactocliente',
            name='pais',
            field=models.CharField(max_length=200, null=True),
        ),
    ]