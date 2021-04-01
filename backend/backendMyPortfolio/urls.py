"""backendMyPortfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path
from django.contrib import admin
# from rest_framework import routers
from quickstart import views
from rest_framework_jwt.views import obtain_jwt_token
from pages.views import home_view, about_view
from products.views import product_detail_view,product_create_view, product_form_create_view
# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# urlpatterns = [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
# ]

urlpatterns = [
    #...
    # path('', include(router.urls)),
    path('home/', home_view, name='home'),
    path('blog/', include('blogs.urls')),
    path('product/detail', product_detail_view, name='product_detail'),
    path('product/create', product_create_view, name='product_create'),
    path('product/create_form', product_form_create_view, name='product_form_create'),
    path('about/', about_view, name='about'),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token)
]
