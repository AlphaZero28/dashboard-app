from django.urls import path

from . import views

urlpatterns = [
    path("api/get-list/", views.get_list, name="get-list"),
    path("api/new-lead/", views.new_lead),
    path("api/lead-segment/", views.get_leads),
    path("api/update-lead-data/", views.update_lead_data),
    path("static/<str:folder>/<str:filename>", views.static),
    path("<slug:path>/", views.index, name="index"),
    path("", views.index, name="index")
]