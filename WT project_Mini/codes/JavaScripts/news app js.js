document.addEventListener('DOMContentLoaded', () => {
    fetch('/get-news')
        .then(response => response.json())
        .then(data => {
            const newsFeed = document.getElementById('news-feed');
            const keywords = ['hospitality', 'hotel', 'travel', 'accommodation'];

            // Filter articles for hospitality-related news
            const filteredArticles = data.articles.filter(article =>
                keywords.some(keyword => article.title.toLowerCase().includes(keyword))
            );

            // Sort articles by published date (if your API provides this)
            filteredArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            // Clear existing news items
            newsFeed.innerHTML = '';

            // Display the filtered articles
            if (filteredArticles.length > 0) {
                filteredArticles.forEach(article => {
                    const newsItem = document.createElement('div');
                    newsItem.className = 'news-item';
                    newsItem.innerHTML = `
                        <div class="news-title">${article.title}</div>
                        <div class="news-description">${article.description || 'No description available.'}</div>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;
                    newsFeed.appendChild(newsItem);
                });
            } else {
                newsFeed.innerHTML = '<p>No latest hospitality news available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('news-feed').innerHTML = '<p>Failed to load news articles. Please try again later.</p>';
        });
});
