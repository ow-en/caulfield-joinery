pub mod config;
pub mod db;
pub mod handlers;
pub mod middleware;
pub mod models;
pub mod routes;
pub mod services;

use axum::{
    Router,
    http::{HeaderValue, Method, header},
};
use tower_http::{cors::CorsLayer, trace::TraceLayer};

use crate::config::Config;

pub fn app(config: &Config) -> Router {
    let frontend_origin =
        HeaderValue::from_str(&config.frontend_url).expect("Invalid FRONTEND_URL");

    let cors = CorsLayer::new()
        .allow_origin(frontend_origin)
        .allow_methods([
            Method::GET,
            Method::POST,
            Method::PUT,
            Method::PATCH,
            Method::DELETE,
        ])
        .allow_headers([header::CONTENT_TYPE, header::AUTHORIZATION]);

    Router::new()
        .nest("/api/v1", routes::api_routes())
        .layer(cors)
        .layer(TraceLayer::new_for_http())
}
