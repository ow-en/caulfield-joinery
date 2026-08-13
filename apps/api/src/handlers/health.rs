use axum::Json;
use serde::Serialize;

#[derive(Serialize)]
pub struct HealthResponse {
    pub service: &'static str,
    pub version: &'static str,
    pub status: &'static str,
}

pub async fn health() -> Json<HealthResponse> {
    Json(HealthResponse {
        service: "caulfield-api",
        version: "0.1.0",
        status: "healthy",
    })
}
