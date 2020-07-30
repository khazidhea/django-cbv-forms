from django.views import View
from django.views.generic import ListView, CreateView
from .models import Post
from .forms import PostForm


class PostListView(ListView):
    template_name = 'index.html'
    model = Post
    context_object_name = 'posts'
    queryset = Post.objects.order_by('-created_at')
    
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['form'] = PostForm()
        return context


class PostCreateView(CreateView):
    model = Post
    form_class = PostForm
    success_url = '/'


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return PostListView.as_view()(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return PostCreateView.as_view()(request, *args, **kwargs)
