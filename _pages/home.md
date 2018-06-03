---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: mm-home-page-feature.jpg
  ctas:
    - cta_label: "<i class='fa fa-building'></i> Learn More"
      cta_url: "/install/"
    - cta_label: "<i class='fab fa-github'></i> Github"
      cta_url: "https://github.com/ellaism"
    - cta_label: "<i class='fas fa-cog'></i> Roadmap"
      cta_url: "/roadmap/"
  caption:
excerpt: 'A stable Ethereum-like network with no premine and no dev fees. Monetary policy is enabled with a total supply of 280 million ELLA.<br />'
feature_row:
  - image_path: mm-customizable-feature.png
    alt: "Pure Smart Contract Platform"
    title: "Pure Smart Contract Platform"
    excerpt: "Ellaism is a pure smart contract platform. No premine. No dev fees. Its goal is to create a smart contract platform that is both fair and trustworthy. Learn more about how it compares with other coins."
    url: "/comparison/"
    btn_label: "Learn More"
  - image_path: mm-responsive-feature.png
    alt: "Transparency and Stability"
    title: "Transparency and Stability"
    excerpt: "In cryptocurrency, transparency brings trust. The Core team hold strong transparency in its financial and development process. Our strong principles also build a stable platform."
    url: "https://github.com/ellaism/meta"
    btn_label: "Learn More"
  - image_path: mm-free-feature.png
    alt: "Community Driven"
    title: "Community Driven"
    excerpt: "We have a welcoming community and a donation-based development process. You have full control over the cryptocurrency you use, and can always choose a team you trust to develop Ellaism."
    url: "/donate/"
    btn_label: "Learn More"
monthly-update:
  - excerpt: "Monthly Community Update - May 2018 [Read Now](/2018/06/03/monthly-update-may-2018/){: .btn}"
---

{% capture social_media %}
  <div class="social-intro" style="vertical-align: top;">Follow the Ellaism community</div>
  <div>
    <div class="social-buttons">
      <a href="https://twitter.com/ellaismproject" class="btn btn--twitter"><i class="fab fa-twitter"></i> @EllaismProject</a>
      <a href="https://discord.ellaism.org/" class="btn btn--google-plus"><i class="fab fa-discord"></i> Discord</a>
    </div>
    <div class="social-links">
      <a href="https://github.com/ellaism"><i class="fab fa-github"></i></a>
      <a href="https://www.reddit.com/r/ellaism"><i class="fab fa-reddit"></i></a>
      <a href="https://t.me/ellaismcoin"><i class="fab fa-telegram"></i></a>
      <a href="https://www.facebook.com/Ellaism-290479708156909"><i class="fab fa-facebook"></i></a>
      <a href="https://bitcointalk.org/index.php?topic=2168042"><i class="fab fa-bitcoin"></i></a>
    </div>
  </div>
{% endcapture %}

{% include feature_row excerpt=social_media type="center" %}

{% include feature_row %}

{% include feature_row id="monthly-update" type="center" %}
