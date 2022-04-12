from django.contrib import admin
from send_email.models import Note, EmailMessage


# Register your models here.
@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    pass


@admin.register(EmailMessage)
class EmailMessageAdmin(admin.ModelAdmin):
    pass
