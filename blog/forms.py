from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['text']

    text = forms.CharField(
        min_length=10,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
