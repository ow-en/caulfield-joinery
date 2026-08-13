use axum::{Router, routing::get};

use crate::handlers::health::health;

pub fn api_routes() -> Router {
    Router::new().route("/health", get(health))
}
