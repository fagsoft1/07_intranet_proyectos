# Generated by Django 2.1.4 on 2018-12-12 19:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0060_auto_20180612_1306'),
        ('bandas_eurobelt', '0003_auto_20181212_1437'),
    ]

    operations = [
        migrations.AddField(
            model_name='componente',
            name='item_cguno',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='componente_banda', to='cguno.ItemsBiable'),
        ),
    ]
