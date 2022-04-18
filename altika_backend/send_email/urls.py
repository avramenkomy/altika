from django.urls import path
from . import views


urlpatterns = [
    path('', views.front, name='front'),
    path('api/note/', views.NoteListCreate.as_view()),
    path('api/feedback_email/', views.EmailMessageListCreate.as_view()),
    path('notes/', views.note, name='note'),
    path('send/', views.feedback_email, name='feedback_email')
]
