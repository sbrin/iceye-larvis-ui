FROM scratch

COPY larvis /larvis

ENTRYPOINT ["/larvis"]
