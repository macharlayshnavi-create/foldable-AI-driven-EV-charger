import threading
import time
import webview
import uvicorn

def run_server():
    uvicorn.run("app:app", host="127.0.0.1", port=8000)

threading.Thread(target=run_server, daemon=True).start()

time.sleep(2)

webview.create_window(
    "FoldCharge AI",
    "http://127.0.0.1:8000",
    width=1600,
    height=900
)

webview.start()