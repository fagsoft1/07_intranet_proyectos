# Generated by Django 2.0.4 on 2018-06-12 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cguno', '0057_auto_20180410_1740'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaboradorbiable',
            name='otro_costo',
            field=models.DecimalField(decimal_places=4, default=0, max_digits=10),
        ),
    ]
