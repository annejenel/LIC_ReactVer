# Generated by Django 4.2.13 on 2024-09-18 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0017_alter_student_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(default='pbkdf2_sha256$600000$PgPeT84WtRRAzBLPes9E7G$oLzuj6dQQiwR/bMrSgGkTQ+RO9IKSoquVM+nY5PcQGs=', max_length=128),
        ),
    ]
