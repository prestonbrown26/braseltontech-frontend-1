# Deploying to Render

This document outlines the steps needed to deploy the BraseltonTech application on Render.

## Deployment Options

There are two main deployment options:

1. **Same Domain Deployment**: Frontend and backend are deployed as a single service
2. **Separate Domain Deployment**: Frontend and backend are deployed as separate services

## Option 1: Same Domain Deployment

In this setup, your Django backend serves both the API and the Next.js frontend from the same domain.

### Environment Variables

Use these environment variables in your Render service:

```
NEXT_PUBLIC_API_BASE_URL=/api
NEXT_PUBLIC_BACKEND_URL=
```

### Render Configuration

1. Create a **Web Service** in Render
2. Set the **Build Command** to:
   ```
   cd backend && pip install -r requirements.txt && python manage.py collectstatic --noinput && cd ../frontend && npm install && npm run build
   ```
3. Set the **Start Command** to:
   ```
   cd backend && gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT
   ```
4. Add environment variables as specified above

### Django Settings

Ensure your Django settings.py has:

```python
CORS_ALLOW_CREDENTIALS = True
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR.parent / 'frontend' / '.next' / 'static']

# Add Next.js build output to templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR.parent / 'frontend' / '.next'],
        # ...
    },
]
```

## Option 2: Separate Domain Deployment

In this setup, your Django backend and Next.js frontend are deployed as separate services.

### Environment Variables (Frontend Service)

```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-name.onrender.com/api
NEXT_PUBLIC_BACKEND_URL=https://your-backend-name.onrender.com
```

### Render Configuration

#### Backend Service:
1. Create a **Web Service** in Render
2. Point to your repository
3. Set the **Build Command** to:
   ```
   cd backend && pip install -r requirements.txt && python manage.py collectstatic --noinput
   ```
4. Set the **Start Command** to:
   ```
   cd backend && gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT
   ```

#### Frontend Service:
1. Create a second **Web Service** in Render
2. Point to the same repository
3. Set the **Build Command** to:
   ```
   cd frontend && npm install && npm run build
   ```
4. Set the **Start Command** to:
   ```
   cd frontend && npm run start
   ```
5. Add environment variables as specified above

### Django Settings

Ensure your Django settings.py has proper CORS settings:

```python
CORS_ALLOWED_ORIGINS = [
    "https://your-frontend-name.onrender.com",
]
CORS_ALLOW_CREDENTIALS = True
```

## Testing Your Deployment

After deploying, visit `/admin-debug` on your frontend to verify:

1. Environment variables are set correctly
2. API connections are working
3. Authentication is functioning properly

If you encounter any issues, check the logs in your Render dashboard for both services. 