from rest_framework import serializers
from .models import Contact
from django.core.mail import send_mail
from vihiga.settings import EMAIL_HOST_USER

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def create(self, validate_data):
        instance = super(ContactSerializer, self).create(validate_data)
        subject = "Subject: " + instance.subject + "\t(From VCRH Website)"
        message = instance.message + "\n" + \
                  "From :\t" + instance.firstname + " " + instance.lastname + \
                  "\n" + "Email Address:\t" + instance.email

        send_mail(
            subject,
            message,
            EMAIL_HOST_USER,
            [EMAIL_HOST_USER],
            fail_silently=False,
        )

        return instance
