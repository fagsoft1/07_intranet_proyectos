# Generated by Django 2.0.1 on 2018-01-29 18:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='itemsbiable',
            name='created',
        ),
        migrations.RemoveField(
            model_name='itemsbiable',
            name='modified',
        ),
    ]
