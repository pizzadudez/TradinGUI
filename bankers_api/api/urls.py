from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

# from rest_framework import routers
# router = routers.SimpleRouter()
# router.register('bankers/', views.BankerList)
# router.register('bankers/<int:pk>/', views.BankerDetail)
# urlpatterns = router.urls

urlpatterns = [
    path('bankers/', views.BankerList.as_view()),
    path('bankers/<int:pk>/', views.BankerDetail.as_view()),
    path('realms/', views.RealmList.as_view()),
    path('restore_default/', views.restore_default_data),
    path('set_default/', views.set_default_data),
]

urlpatterns = format_suffix_patterns(urlpatterns)