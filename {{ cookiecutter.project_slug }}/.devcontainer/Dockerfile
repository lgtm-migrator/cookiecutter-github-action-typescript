##############################################################
### INSTRUCTIONS FROM VSCODE TEMPLATE 'Node.js Typescript' ###
# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}


########################
### OWN INSTRUCTIONS ###
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get -qy update \
    && apt-get -qy upgrade \
    && apt-get -qy install --no-install-recommends apt-utils tini \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN apt-get -qy update \
    && apt-get -qqy install --no-install-recommends python3-pip python3-wheel \
    && python3 -m pip install --no-cache-dir --upgrade pip \
    && python3 -m pip install --no-cache-dir wheel \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

USER node
RUN git clone --depth=1 https://github.com/Bash-it/bash-it.git /home/node/.bash_it && \
    /home/node/.bash_it/install.sh --overwrite-backup --silent
# `bash-it` is a function. need to go into interactive mode of before-defined USER!
SHELL ["/bin/bash", "-ic"]
RUN bash-it enable alias apt bash-it curl docker fuck general git systemd npm yarn && \
    bash-it enable completion bash-it defaults dirs docker git github-cli pip3 pipx ssh system npm && \
    bash-it enable plugin alias-completion base colors dirs docker explain extract git gitstatus history history-search man python thefuck z_autoenv node nodeenv nvm
SHELL ["/bin/bash", "-c"]

COPY postCreateCommand.sh /home/node/postCreateCommand.sh
USER root
RUN chmod u+x /home/node/postCreateCommand.sh

USER node

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"