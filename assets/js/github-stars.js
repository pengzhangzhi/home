(() => {
  document.querySelectorAll('[data-github-repo]').forEach(async (link) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${link.dataset.githubRepo}`, {
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) return;
      const repository = await response.json();
      if (!Number.isSafeInteger(repository.stargazers_count) || repository.stargazers_count < 0) return;
      const count = new Intl.NumberFormat(document.documentElement.lang || undefined).format(repository.stargazers_count);
      link.querySelector('span').textContent = `${count} GitHub stars`;
      link.setAttribute('aria-label', `${repository.name}: ${count} GitHub stars. View stargazers on GitHub`);
    } catch (_) {
      // The link remains useful when GitHub is unreachable or rate-limited.
    }
  });
})();
