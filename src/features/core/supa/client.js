import { createClient } from '@supabase/supabase-js';

const { REACT_APP_SUPA_URL, REACT_APP_SUPA_API_KEY } = process.env;

const supaClient = createClient(REACT_APP_SUPA_URL, REACT_APP_SUPA_API_KEY);

export default supaClient;
