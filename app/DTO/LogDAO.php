<?php

namespace App\DTO;

class LogDAO
{
    private string $name;
    private string $token;
    private string $description;
    private string $service;

    public function __construct(array $array = [])
    {
        $refl = new \ReflectionClass($this);

        foreach ($array as $propertyToSet => $value) {
            if (!$refl->hasProperty($propertyToSet)) {
                continue;
            }

            $property = $refl->getProperty($propertyToSet);

            $property->setAccessible(true);

            if ($property instanceof \ReflectionProperty) {
                $property->setValue($this, $value);
            }
        }
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function setToken(string $token)
    {
        $this->token = $token;
        return $this;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function setService(string $service): self
    {
        $this->service = $service;
        return $this;
    }

    public function getService(): string
    {
        return $this->service;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function getName(): string
    {
        return $this->name;
    }
}
