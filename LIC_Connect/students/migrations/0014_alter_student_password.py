# Generated by Django 4.2.13 on 2024-09-18 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0013_alter_student_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(default='pbkdf2_sha256$600000$b6JH2TO6TrSTcDsPXv7voT$PbzZ/Vn4SkrHKjRiNa/EWMte8NjsAxN49ab2AHUxlIs=', max_length=128),
        ),
    ]
