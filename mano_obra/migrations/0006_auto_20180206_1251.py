# Generated by Django 2.0.1 on 2018-02-06 12:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0009_auto_20180205_1432'),
        ('cguno', '0010_colaboradorbiable_autogestion_horas_trabajadas'),
        ('mano_obra', '0005_auto_20180205_1839'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DiaTrabajo',
            new_name='HojaTrabajoDiario',
        ),
        migrations.RenameModel(
            old_name='DiaTrabajoOp',
            new_name='HoraHojaTrabajo',
        ),
        migrations.RenameField(
            model_name='horahojatrabajo',
            old_name='dia',
            new_name='hoja',
        ),
        migrations.AlterUniqueTogether(
            name='horahojatrabajo',
            unique_together={('hoja', 'literal')},
        ),
    ]
