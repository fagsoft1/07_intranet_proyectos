# Generated by Django 2.0.1 on 2018-04-04 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0050_auto_20180404_2115'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaboradorbiable',
            name='auxilio_transporte',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=20),
        ),
    ]
