use axum::{
    routing::get,
    Json,
    Router,
};

use serde::Serialize;

#[derive(Serialize)]
struct Health {
    service: &'static str,
    version: &'static str,
}

async fn health() -> Json<Health> {
    Json(Health {
        service: "caulfield-api",
        version: "0.1.0",
    })
}

pub fn app() -> Router {
    Router::new()
        .route("/", get(health))
}