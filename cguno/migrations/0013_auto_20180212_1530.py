# Generated by Django 2.0.1 on 2018-02-12 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0012_auto_20180209_1823'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='colaboradorbiable',
            options={'permissions': [('list_colaboradorbiable', 'Can see list colaboradores CGUNO')], 'verbose_name': 'Colaborador', 'verbose_name_plural': 'Colaboradores'},
        ),
    ]
