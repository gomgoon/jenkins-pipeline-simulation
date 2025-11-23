# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# CORS 설정 (React와 연동 시 필수)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 실제 운영 시엔 도메인 지정
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/price-data")
def get_price_data():
    df = yf.download("005930.KS", start="2014-01-01", threads=False)

    if df.empty:
        return {"error": "Failed to fetch stock data"}

    df.reset_index(inplace=True)
    return [
        {"Date": str(row["Date"]), "Close": row["Close"]}
        for _, row in df.iterrows()
    ]


@app.get("/summary")
def get_summary():
    df = yf.download("005930.KS", start="2014-01-01", threads=False)

    if df.empty:
        return {"error": "Failed to fetch stock data"}

    start_price = df["Close"].iloc[0]
    latest_price = df["Close"].iloc[-1]
    shares = 10_000_000 / start_price
    current_value = shares * latest_price
    rate = (current_value - 10_000_000) / 10_000_000 * 100
    return {
        "start_price": round(start_price, 2),
        "latest_price": round(latest_price, 2),
        "current_value": round(current_value, 2),
        "rate_of_return": round(rate, 2),
    }
