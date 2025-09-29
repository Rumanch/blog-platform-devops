import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    const [form, setForm] = useState({ title: '', content: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/posts', form);
        setPosts([...posts, res.data]);
        setForm({ title: '', content: '' });
    };

    return (
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
            <h1>📝 Blog App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    style={{ width: '300px', padding: '8px' }}
                /><br /><br />
                <textarea
                    placeholder="Content"
                    value={form.content}
                    onChange={e => setForm({ ...form, content: e.target.value })}
                    style={{ width: '300px', height: '100px', padding: '8px' }}
                ></textarea><br /><br />
                <button type="submit" style={{ padding: '8px 16px' }}>Add Post</button>
            </form>

            <h2>📚 Posts</h2>
            {posts.map((post, idx) => (
                <div key={idx} style={{ marginTop: '20px' }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default App;
