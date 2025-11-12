from supabase import create_client
from fastapi import FastAPI

app = FastAPI()

supa = create_client("url", "key")

@app.get('/val_urs/login={login}&pass={password}')
def validate(login, password):

    r = supa.table('Usr_table').select('id').eq("logon", login).eq("pass",password).execute()
    return str(r)


