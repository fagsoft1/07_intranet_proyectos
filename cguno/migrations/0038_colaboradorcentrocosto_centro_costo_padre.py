# Generated by Django 2.0.1 on 2018-04-03 15:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0037_auto_20180403_1544'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaboradorcentrocosto',
            name='centro_costo_padre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='cguno.ColaboradorCentroCosto'),
        ),
    ]
