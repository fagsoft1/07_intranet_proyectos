# Generated by Django 2.0.1 on 2018-01-30 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0001_initial'),
        ('cguno', '0004_itemsliteralbiable'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='itemsliteralbiable',
            unique_together={('item_biable', 'literal')},
        ),
    ]